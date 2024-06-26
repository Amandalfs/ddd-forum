import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface AwserProps {
    authorId: UniqueEntityId
    questionId: UniqueEntityId
    content: string
    createdAt: Date,
    updatedAt?: Date,
}

export class Awser extends Entity<AwserProps> {
    get content(): string {
        return this.props.content;
    }

    static create(props: Optional<AwserProps, 'createdAt'>, id?: UniqueEntityId){
        const awser = new Awser({
            ...props,
            createdAt: new Date(),
        }, id)
        return awser;
    }
}