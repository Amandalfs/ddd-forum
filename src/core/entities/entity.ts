import { randomUUID } from 'node:crypto'
import { UniqueEntityId } from './unique-entity-id'

export class Entity<T> {
  private _id: UniqueEntityId
  protected props: T

  protected constructor(props: T, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }

  get id(): string {
    return this._id.toString()
  }
}
