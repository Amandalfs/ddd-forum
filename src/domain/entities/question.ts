import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";
import dayjs from "dayjs";

export  interface QuestionProps {
    title: string
    content: string
    bestAwserId?: UniqueEntityId
    slug: Slug
    authorId: UniqueEntityId
    createdAt: Date,
    updatedAt?: Date,
}

export class Question extends Entity<QuestionProps> {

    get title(): string {
        return this.props.title;
    }

    get content(): string {
        return this.props.content;
    }

    get bestAwserId(): UniqueEntityId | undefined {
        return this.props.bestAwserId;
    }

    get slug(): Slug {
        return this.props.slug;
    }

    get authorId(): UniqueEntityId {
        return this.props.authorId;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }

    get isNew(): boolean {    
        const newThresholdDays = 3;
        return dayjs().diff(this.createdAt,'days') <= newThresholdDays;
    }

    /**
     * The `experpt` getter returns a brief excerpt of the content.
     *
     * @returns {string} A string that contains the first 120 characters of the content,
     * trimmed of any trailing whitespace and followed by an ellipsis (`...`).
     *
     * The purpose of this getter is to provide a concise preview of the content,
     * which can be useful for displaying summaries or snippets in user interfaces.
     *
     * @example
     * // Assuming `content` is "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     * const excerpt = this.excerpt;
     * // excerpt will be "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et..."
     */
    get experpt(){
        return this.content.substring(0, 120).trimEnd().concat('...')
    }

    
    private touch(){
        this.props.updatedAt = new Date();
    }

    set content(content: string){
        this.props.content = content;
        this.touch();
    }

    set title(title: string){
        this.props.title = title;
        this.props.slug = Slug.createFromText(title);
        this.touch();
    }

    static create(props: Optional<QuestionProps, 'createdAt' | 'slug'>, id?: UniqueEntityId){
        const question = new Question({
            ...props,
            slug: props.slug ?? Slug.createFromText(props.title),
            createdAt: new Date(),
        }, id)
        return question;
    }
}