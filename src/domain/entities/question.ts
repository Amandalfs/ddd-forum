import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

export  interface QuestionProps {
    title: string
    content: string
    bestAwserId: UniqueEntityId
    slug: Slug
    authorId: UniqueEntityId
    createdAt: Date,
    updatedAt?: Date,
}

export class Question extends Entity<QuestionProps> {
   static create(props: Optional<QuestionProps, 'createdAt'>, id?: UniqueEntityId){
    const question = new Question({
        ...props,
        createdAt: new Date(),
    }, id)
    return question;
   }
}