import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import {bcrypt} from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService:JwtService
    ) {
        
    }

    async signUp(signUpDto) {
        const { name, email, password } = signUpDto
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await this.userModel.create({
            name,
            email,
            password:hashedPassword
        })

        const token = this.jwtService.sign({ id: user.id })
        return {token}
    }
}
