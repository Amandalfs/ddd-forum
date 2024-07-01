import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'
test('create an question', async () => {
  const fakeQuestionsRepository = new (class FakeQuestionsRepository
    implements QuestionsRepository
  {
    private list: Question[] = []
    async create(awser: Question): Promise<void> {
      this.list.push(awser)
    }
  })()
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const props = {
    authorId: '1',
    title: 'How codend Typescript',
    content: 'dsbvsvbvsdbvsikdvbis',
  }

  const { question } = await createQuestion.execute(props)

  expect(question.content).toEqual(props.content)
})
