import React, { useReducer } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { items } from "../../data/carts";
import DeleteIcon from "@mui/icons-material/Delete";
import { log } from "console";

interface Props2 {
  numbers: number[];
}

interface NumberState {
  numbers: number[];
}

type Action = { type: "remove"; id: number };

const cartReducer = (state: NumberState, action: Action): NumberState => {
  switch (action.type) {
    case "remove":
      return { numbers: state.numbers.filter((num) => num !== action.id) };
    default:
      return state;
  }
};

const Cart: React.FC<Props2> = ({ numbers }) => {
  const product = items;
  const filteredArray = product.filter((item) => numbers.includes(item.id));
  const filteredNumbers: number[] = filteredArray.map((item) => item.id);

  const [state, dispatch] = useReducer(cartReducer, {
    numbers: filteredNumbers,
  });
  const handleRemoveTodo = (id: number) => {
    dispatch({ type: "remove", id });
    console.log(`Removed ${id}`);
  };
  return (
    <div>
      {" ShoppingCart"}
      <Card>
        {filteredArray.map((item) => (
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography color="text.secondary">
                Price: ${item.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DeleteIcon />}
                onClick={() => handleRemoveTodo(item.id)}
              >
                Remove from Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </Card>
    </div>
  );
};
export default Cart;
