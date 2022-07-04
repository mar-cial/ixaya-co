import { ProductResult } from '../model/products';
import { motion } from 'framer-motion';
type Props = {
  product: ProductResult;
};

interface ILabel {
  title: string;
  value: string;
  col?: boolean;
}

const Label = ({ title, value, col }: ILabel) => {
  return (
    <div
      className={`flex p-1 border-b-2 w-full  ${
        col ? 'flex-col justify-center' : 'flex-row justify-between'
      }`}
    >
      <h4 className="text-sm font-light">{title.toUpperCase()}</h4>
      <p>{value}</p>
    </div>
  );
};

const ProductPropertiesView = ({ product }: Props) => {
  return (
    <div className={`flex flex-col gap-4 py-4`}>
      <div className={`flex p-1 border-b-2 w-full flex-col pb-6`}>
        <h4 className="text-sm font-light">DESCRIPTION</h4>
        <p>{product.short_description}</p>
      </div>
      <Label title="ID" value={product.id} />
      <Label title="CATEGORY" value={product.category} />
      <Label title="sale count" value={product.sale_count} />
      <Label
        title="discount"
        value={`$${parseFloat(product.discount).toFixed(2)}`}
      />
      <Label title="enabled" value={product.enabled} />
      <Label title="creation date" value={product.create_date.toString()} />
      <Label title="last update" value={product.last_update.toString()} />
      <Label title="price" value={`$${parseFloat(product.price).toFixed(2)}`} />

      <motion.button
        className="py-2 border-2 border-black"
        whileHover={{
          backgroundColor: 'black',
          color: 'white',
          y: -3,
        }}
        whileTap={{
          y: 0,
        }}
      >
        Add to cart
      </motion.button>
    </div>
  );
};

export default ProductPropertiesView;
