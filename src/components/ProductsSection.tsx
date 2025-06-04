import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Package, Truck } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
}

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const products: Product[] = [
    {
      id: 'tshirt',
      name: t('products.items.tshirt.name'),
      image: '/static/images/camiseta.jpg'
    },
    {
      id: 'hoodie',
      name: t('products.items.hoodie.name'),
      image: '/static/images/sudadera.jpg'
    },
    {
      id: 'stickers',
      name: t('products.items.stickers.name'),
      image: '/static/images/pegatina.jpg'
    },
    {
      id: 'mug',
      name: t('products.items.mug.name'),
      image: '/static/images/taza.jpg'
    }
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('products.title')} <span className="text-[#ff6900]">{t('products.subtitle')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {t(`products.items.${product.id}.description`)}
                </p>
<div className="flex justify-end">
  <a 
    href="https://shop.thehackerslabs.com/" 
    className="px-4 py-2 bg-[#ff6900] text-black rounded-md font-medium hover:bg-[#ff8c00] transition-colors duration-200"
  >
    {t('products.addToCart')}
  </a>
</div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center p-6 bg-gray-900 rounded-lg">
            <ShoppingBag className="h-8 w-8 text-[#ff6900] mr-4" />
            <div>
              <h3 className="text-white font-bold">{t('products.features.payment.title')}</h3>
              <p className="text-gray-400 text-sm">{t('products.features.payment.description')}</p>
            </div>
          </div>
          
          <div className="flex items-center p-6 bg-gray-900 rounded-lg">
            <Package className="h-8 w-8 text-[#ff6900] mr-4" />
            <div>
              <h3 className="text-white font-bold">{t('products.features.quality.title')}</h3>
              <p className="text-gray-400 text-sm">{t('products.features.quality.description')}</p>
            </div>
          </div>
          
          <div className="flex items-center p-6 bg-gray-900 rounded-lg">
            <Truck className="h-8 w-8 text-[#ff6900] mr-4" />
            <div>
              <h3 className="text-white font-bold">{t('products.features.shipping.title')}</h3>
              <p className="text-gray-400 text-sm">{t('products.features.shipping.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;