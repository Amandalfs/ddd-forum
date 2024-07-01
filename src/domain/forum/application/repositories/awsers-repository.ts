import { Awser } from '../../enterprise/entities/awser'

export interface AwsersRepository {
  create(awser: Awser): Promise<void>
}
