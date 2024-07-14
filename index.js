import express from "express";
import cors from 'cors';
import fs from "fs";
import { log } from "console";

const app = express();
const port = 5000;
app.use(cors());
const customersData = JSON.parse(fs.readFileSync("customers.json", "utf8"));
const transactionsData = JSON.parse(fs.readFileSync("transactions.json", "utf8")
);

app.get("/customers", (req, res) => {
    res.json(customersData);
});
app.get("/transactions", (req, res) => {
    res.json(transactionsData);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
