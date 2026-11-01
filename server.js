import express from "express";

const app = express();

app.use(express.json());

let tickets = [
  {
    id: 1,
    customer: "Asha",
    issue: "Login problem",
    status: "Open"
  }
];

app.get("/", (req, res) => {
  res.send("Customer Support REST API is running");
});

app.get("/api/tickets", (req, res) => {
  res.json(tickets);
});

app.post("/api/tickets", (req, res) => {
  const { customer, issue } = req.body;

  if (!customer || !issue) {
    return res.status(400).json({
      message: "Customer and issue are required"
    });
  }

  const ticket = {
    id: tickets.length
      ? Math.max(...tickets.map(t => t.id)) + 1
      : 1,
    customer,
    issue,
    status: "Open"
  };

  tickets.push(ticket);
  res.status(201).json(ticket);
});

app.put("/api/tickets/:id", (req, res) => {
  const ticket = tickets.find(
    t => t.id === Number(req.params.id)
  );

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found"
    });
  }

  ticket.status = req.body.status || ticket.status;

  res.json(ticket);
});

app.delete("/api/tickets/:id", (req, res) => {
  const ticket = tickets.find(
    t => t.id === Number(req.params.id)
  );

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found"
    });
  }

  tickets = tickets.filter(
    t => t.id !== Number(req.params.id)
  );

  res.json({
    message: "Ticket deleted successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});