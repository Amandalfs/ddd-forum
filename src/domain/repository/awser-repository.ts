import { Awser } from "../entities/awser";

export interface AwserRepository {
    create(awser: Awser): Promise<void>
}