import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ItemList } from '../api/items';
import { CartContext } from '../context/CartContext';
import { CategoryContext } from '../context/CategoryContext';

function CategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const { categories } = useContext(CategoryContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {addToCart} = useContext(CartContext);
  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const [ allItems] = await Promise.all([
          ItemList()
        ]);
        if (!mounted) return;
        const foundCategory = categories.find(
          (cat) => String(cat.id) === String(id)
        );
        const categoryItems = allItems.filter(
          (item) => String(item.category) === String(id)
        );
        setCategory(foundCategory || null);
        setItems(categoryItems);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return <p className="p-4">Loading category…</p>;
  }

  if (!category) {
    return <p className="p-4">Category not found.</p>;
  }

  return (
    <div className="categoryPage container py-4">
      <header className="mb-4 text-center">
        <h1 className="mb-2">{category.name}</h1>
        <p className="text-muted">
          {items.length
            ? `${items.length} item${items.length > 1 ? 's' : ''}`
            : 'No items available'}
        </p>
      </header>

      <div className="row g-4">
        {items.map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <Card className="h-100">
              <Link to={`/item/${item.id}`} className='categoryCardLink'>
              <Card.Img
                variant="top"
                src={item.imgUrl}
                alt={item.name}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {item.description}
                </Card.Text>
                <div className="mb-2 fw-bold">${item.price} USD</div>
               <Button size="sm" onClick={(event) => {
                                    event.preventDefault();
                                    addToCart(item);
                                  }}>Add to Cart</Button>
              </Card.Body>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
