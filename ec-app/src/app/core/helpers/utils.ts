export const formatPrice = (price: number): string =>
  price.toLocaleString('vi-VN') + ' VND';

export const formatSize = (size: string): string =>
  size.length > 0 ? size[0].toUpperCase() + size.slice(1) : '';
