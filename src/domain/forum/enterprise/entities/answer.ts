import { Entity } from 'src/core/entities/entity'
import { UniqueEntityId } from 'src/core/entities/unique-entity-id'
import { Optional } from 'src/core/types/optional'

interface AnswerProps {
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content(): string {
    return this.props.content
  }

  get authorId(): UniqueEntityId {
    return this.props.authorId
  }

  get questionId(): UniqueEntityId {
    return this.props.questionId
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const awser = new Answer(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
    return awser
  }
}
