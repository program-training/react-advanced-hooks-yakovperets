import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Item {
  id: number;
  name: string;
  price: string;
}

interface Props {
  item: Item;
  onAddToCart: (item: Item) => void;
  addNumber: (newNumber: number) => void;
}
const ItemCart: React.FC<Props> = ({ item, onAddToCart, addNumber }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography color="text.secondary">Price: ${item.price}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onAddToCart && onAddToCart(item);
            addNumber && addNumber(item.id);
          }}
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
export default ItemCart;
