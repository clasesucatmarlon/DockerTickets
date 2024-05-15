import Ticket from "../models/tickets.model.js";
import User from "../models/user.model.js";
import { TicketEmail } from "../emails/ticket.email.js";

export class TicketController {

    // CREAR TICKET
    static createTicket = async (req, res) => {
        try {
            const { user } = req;

            const { title, shortDescription, description, category } = req.body;

            if (!title || !shortDescription || !description || !category) {
                return res.status(400).json({
                    response: "error",
                    message: "Todos los datos son obligatorios",
                });
            }

            const ticket = new Ticket({
                title,
                shortDescription,
                description,
                category,
                createdBy: user._id,
            });

            const savedTicket = await ticket.save();

            // TICKET CON LOS DATOS DEL USUARIO CREADOR
            const ticketWithCreatedBy = await Ticket.findById(
                savedTicket._id
            ).populate({
                path: "createdBy",
                model: "User",
                select: "-password -__v -updatedAt -isActive -isConfirmed",
            });

            // LISTA DE USUARIOS QUE TIENEN PERMISO DE SUPPORT PARA LUEGO ENVIARLES EMAIL CON NUEVO TICKET CREADO
            const usersSupport = await User.find({ permissions: { $in: "support" } });

            if (usersSupport) {
                usersSupport.map(async (support) => {
                    await TicketEmail.createTicket({
                        ticketId: savedTicket._id,
                        firstName: ticketWithCreatedBy.createdBy.firstName,
                        lastName: ticketWithCreatedBy.createdBy.lastName,
                        email: support.email,
                        description: savedTicket.description,
                    });
                });
            }

            res
                .status(202)
                .json({ response: "success", message: "Ticket creado correctamente", ticket });
        } catch (error) {
            console.log("[ERROR_CREATE_TICKET]", error);
            return res
                .status(500)
                .json({ response: "error", message: "Error del servidor" });
        }
    }


    // OBTENER TODOS LOS TICKETS
    static getAllTickets = async (req, res) => {
        try {
            const { user } = req;
            const { page } = req.body;

            const limit = 5;

            let tickets = [];

            if (!user.permissions.includes("support")) {
                tickets = await Ticket.find({ createdBy: user._id })
                    .populate({
                        path: "createdBy",
                        model: "User",
                        select: "-password -__v -updatedAt -isActive -isConfirmed",
                    })
                    .sort({ createdAt: "desc" })
                    .skip((page - 1) * limit)
                    .limit(limit);
            } else {
                tickets = await Ticket.find()
                    .populate({
                        path: "createdBy",
                        model: "User",
                        select: "-password -__v -updatedAt -isActive -isConfirmed",
                    })
                    .sort({ createdAt: "desc" })
                    .skip((page - 1) * limit)
                    .limit(limit);
            }

            res.status(200).json(tickets);
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ response: "error", message: "Error del servidor" });
        }
    };


    // OBTENER TICKET POR ID
    static getTicketByID = async (req, res) => {

        try {
            const { ticketId } = req.body;

            if (!Types.ObjectId.isValid(ticketId)) {
                return res
                    .status(404)
                    .json({ response: 'error', message: 'ID no válido' });
            }

            const ticket = await Ticket.find({ ticketId })
                .populate({
                    path: "createdBy",
                    model: "User",
                    select: "-password -__v -updatedAt -isActive -isConfirmed",
                })

            if (!ticket) {
                return res.status(400).json({
                    response: "error",
                    message: "Ticket no encontrado",
                });
            }
            return res.status(200).json(ticket);

        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ response: "error", message: "Error del servidor" });
        }

    }

    // ACTUALIZAR TICKET
    static updateTickets = async (req, res) => {
        res.send("Ticket actualizado......");
    }

}