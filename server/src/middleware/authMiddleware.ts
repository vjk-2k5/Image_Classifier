import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

const JWT_SECRET = process.env.JWT_SECRET || 'secretsuperkey123!@$';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void  => {
    const token = req.headers['authorization']?.split(' ')[1]; 

    if (!token) {
        res.sendStatus(401); 
        return;
    }
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.sendStatus(403); 
            console.log(token,err,user);
            return;
        }
        req.user = user as { id: string };
        next(); 
    });
};
