import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from './../../../../test/repositories/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let suit: AnswerQuestionUseCase
describe('create an awser', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    suit = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create a answer', async () => {
    const { answer } = await suit.execute({
      content: 'Nova Resposta',
      instructorId: '1',
      questionId: '2',
    })

    expect(answer.content).toEqual('Nova Resposta')
  })
})
