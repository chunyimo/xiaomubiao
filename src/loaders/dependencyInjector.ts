import { Model } from 'mongoose';
import Container from 'typedi';

const dependencyInjector = ({
  models,
}: {
  models: Array<{ name: string; model: Model<any> }>;
}) => {
  try {
    models.forEach((model) => {
      Container.set(model.name, model.model);
    });
  } catch (error) {}
};

export default dependencyInjector;