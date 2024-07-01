import { Awser } from '../../enterprise/entities/awser'
import { AwsersRepository } from '../repositories/awsers-repository'
import { AwserQuestionUseCase } from './awser-question'

test('create an awser', async () => {
  const fakeAwsersRepository = new (class FakeAwsersRepository
    implements AwsersRepository
  {
    private list: Awser[] = []
    async create(awser: Awser): Promise<void> {
      this.list.push(awser)
    }
  })()
  const awserQuestion = new AwserQuestionUseCase(fakeAwsersRepository)

  const awser = await awserQuestion.execute({
    content: 'Nova Resposta',
    instructorId: '1',
    questionId: '2',
  })

  expect(awser.content).toEqual('Nova Resposta')
})
