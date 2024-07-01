import { UniqueEntityId } from 'src/core/entities/unique-entity-id'
import { Awser } from '../../enterprise/entities/awser'
import { AwsersRepository } from '../repositories/awsers-repository'

interface AwserQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AwserQuestionUseCase {
  constructor(private awsersRepository: AwsersRepository) {}
  async execute({
    instructorId,
    questionId,
    content,
  }: AwserQuestionUseCaseRequest) {
    const awser = Awser.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.awsersRepository.create(awser)

    return awser
  }
}
