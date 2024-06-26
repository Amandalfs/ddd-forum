import { Entity } from "../../core/entities/entity";

interface AwserProps {
    content: string
    authorId: string
    questionId: string
}

export class Awser extends Entity<AwserProps> {
    constructor(props: AwserProps, id?: string){
        super(props, id);
    }

    get content(): string {
        return this.content;
    }
}