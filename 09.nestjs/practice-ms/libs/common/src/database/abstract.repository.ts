import { Logger, NotFoundException } from '@nestjs/common';
import { Model, Types, UpdateQuery, FilterQuery } from 'mongoose';
import AbstractDocument from './abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });

    return (await createdDocument.save()).toJSON() as unknown as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model
      .findOne(filterQuery)
      .lean<TDocument>(true);

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    return document;
  }
}
