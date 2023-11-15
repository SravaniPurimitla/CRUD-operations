import React, { useState } from 'react';


const Product = () => {
  const [productData, setProductData] = useState([]);
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  
  const [price, setPrice] = useState('');
  const [editProductId, setEditProductId] = useState('');
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('');

  const addProduct = () => {
    if (productId && name && price) {
      setProductData([
        ...productData,
        {
          id: productId,
          name: name,
          price: price,
        },
      ]);

      setProductId('');
      setName('');
      setPrice('');
    }
  };

  const editProduct = (product) => {
    setEditProductId(product.id);
    setEditedName(product.name);
    setEditedPrice(product.price);
  };

  const updateProduct = () => {
    if (editedName && editedPrice) {
      setProductData((prevProductData) =>
        prevProductData.map((product) => {
          if (product.id === editProductId) {
            return {
              id: editProductId,
              name: editedName,
              price: editedPrice,
            };
          }
          return product;
        })
      );

      setEditProductId('');
      setEditedName('');
      setEditedPrice('');
    }
  };

  const deleteProduct = (productId) => {
    setProductData((prevProductData) =>
      prevProductData.filter((product) => product.id !== productId)
    );
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div>
        <label>Product ID:</label>
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button onClick={addProduct}>Add Product</button>

      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{editProductId === product.id ? (
                <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
              ) : product.name}</td>
              <td>{editProductId === product.id ? (
                <input type="text" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
              ) : product.price}</td>
              <td>
                {editProductId === product.id ? (
                  <button onClick={updateProduct}>Update</button>
                ) : (
                  <button onClick={() => editProduct(product)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;