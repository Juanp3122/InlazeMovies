import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema()
export class User {
  @Prop({required:true})
  userName: string;

  @Prop({required:true})
  password: string;

  @Prop ({unique:true})
  email:string
 
}

export const UserSchema = SchemaFactory.createForClass(User);