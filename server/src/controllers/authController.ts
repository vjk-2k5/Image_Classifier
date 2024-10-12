import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';


export const registerUser = async (req: Request, res: Response) => {
    const { fullName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({ fullName, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ success: true, data: user });
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
        return;
    }
    
    const token = generateToken(user._id.toString());
    res.status(200).json({ success: true, token });
};
