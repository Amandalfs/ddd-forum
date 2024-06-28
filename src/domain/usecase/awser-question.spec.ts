import { AwserQuestionUseCase } from "./awser-question";
import { Awser } from "../entities/awser";
import { AwserRepository } from './../repository/awser-repository';

test('create an awser', async () => {
    const fakeAwserRepository = new class FakeAwserRepository implements AwserRepository {
        private list: Awser[] = []
        async create(awser: Awser): Promise<void> {
            this.list.push(awser)
        }
    }
    const awserQuestion = new AwserQuestionUseCase(fakeAwserRepository)

    const awser = await awserQuestion.execute({
        content: 'Nova Resposta',
        instructorId: '1',
        questionId: '2'
    })

    expect(awser.content).toEqual('Nova Resposta')
})