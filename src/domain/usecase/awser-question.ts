import { Awser } from "../entities/awser"
import { AwserRepository } from './../repository/awser-repository';

interface AwserQuestionUseCaseRequest {
    instructorId: string,
    questionId: string,
    content: string
}

export class AwserQuestionUseCase {
    constructor(private awserRepository: AwserRepository){}
    async execute({ instructorId, questionId, content}: AwserQuestionUseCaseRequest){
        const awser = new Awser({content, authorId: instructorId, questionId})
        
        await this.awserRepository.create(awser);

        return awser;
    }
}
