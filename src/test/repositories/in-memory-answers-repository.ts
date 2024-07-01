import { AnswersRepository } from 'src/domain/forum/application/repositories/answers-repository'
import { Answer } from 'src/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public list: Answer[] = []
  async create(awser: Answer): Promise<void> {
    this.list.push(awser)
  }
}
