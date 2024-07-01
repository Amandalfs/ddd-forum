import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRepository {
  create(awser: Answer): Promise<void>
}
