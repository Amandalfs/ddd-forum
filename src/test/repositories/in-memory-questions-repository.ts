import { QuestionsRepository } from 'src/domain/forum/application/repositories/questions-repository'
import { Question } from 'src/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public list: Question[] = []
  async create(awser: Question): Promise<void> {
    this.list.push(awser)
  }
}
