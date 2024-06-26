import { Awser } from "../entities/awser"
import { AwserRepository } from './../repository/awser-repository';
import { UniqueEntityId } from './../../core/entities/unique-entity-id';

interface AwserQuestionUseCaseRequest {
    instructorId: string,
    questionId: string,
    content: string
}

export class AwserQuestionUseCase {
    constructor(private awserRepository: AwserRepository){}
    async execute({ instructorId, questionId, content}: AwserQuestionUseCaseRequest){
        const awser = Awser.create({
            content,
            authorId: new UniqueEntityId(instructorId), 
            questionId: new UniqueEntityId(questionId)
        })
        
        await this.awserRepository.create(awser);

        return awser;
    }
}
