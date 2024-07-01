import { InMemoryQuestionsRepository } from 'src/test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let suit: CreateQuestionUseCase

describe('create an question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    suit = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const props = {
      authorId: '1',
      title: 'How codend Typescript',
      content: 'dsbvsvbvsdbvsikdvbis',
    }

    const { question } = await suit.execute(props)

    expect(question.content).toEqual(props.content)
    expect(question.title).toEqual(props.title)
    expect(question.id).toBeTruthy()
  })
})
