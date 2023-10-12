import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useLocalStorage from "../../customhooks/StorageHook";

const Storage: React.FC = () => {
  const [newData, setNewData] = React.useState("");
  const [allData, saveAllData] =
    useLocalStorage<{ key: string; value: string }[]>("allData");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewData(event.target.value);
  };

  const handleSave = () => {
    const newDataItem = { key: "yourKeyName", value: newData };
    saveAllData([...(allData || []), newDataItem]);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Local Storage
          </Typography>
          <>
            <Typography variant="h6" component="div">
              add object to local storage
            </Typography>
            <TextField
              label="add key value"
              variant="outlined"
              fullWidth
              value={newData}
              onChange={handleInputChange}
            />

            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Data
            </Button>
          </>
        </CardContent>
      </Card>

      <Card style={{ marginTop: "16px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            All Data in Local Storage
          </Typography>
          {allData?.map((item, index) => (
            <p key={index}>
              <strong>{item.key}:</strong> {item.value}
              <Button variant="contained" color="primary" onClick={handleSave}>
                delete
              </Button>
            </p>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Storage;
