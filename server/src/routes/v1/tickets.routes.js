import express from "express";

import { TicketController } from "../../controllers/tickets.controller.js";
import { checkAuth } from "../../middlewares/checkAuth.middleware.js";

export const ticketsRoutes = express.Router();

ticketsRoutes.post("/", checkAuth, TicketController.createTicket);
ticketsRoutes.get("/", checkAuth, TicketController.getAllTickets);
ticketsRoutes.get("/:ticketId", checkAuth, TicketController.getTicketByID);
ticketsRoutes.put("/:ticketId", checkAuth, TicketController.updateTickets);
