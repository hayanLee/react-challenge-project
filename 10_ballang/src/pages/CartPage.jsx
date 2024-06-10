import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../api/api';

function CartPage() {
    const queryClient = useQueryClient();

    const { data: cart, isLoading } = useQuery({
        queryKey: ['cart'],
        queryFn: () => api.cart.getCart(),
    });
    // console.log(cart);

    const { mutateAsync: removeItemFromCart } = useMutation({
        mutationFn: (productId) => api.cart.removeItemFromCart(productId),
    });

    const handleClickRemoveItemToCart = (productId) => async () => {
        await removeItemFromCart(productId);
        alert('상품이 장바구니에서 제거되었습니다');

        // 기존 정보를 무효화하기 => 그러면 알아서 새로운 데이터를 받아옴
        // invalidateQueries는 useQuery로 실행
        // 정확히 같은 키를 선택하려면 exact : true
        queryClient.invalidateQueries({ queryKey: ['cart'], exact: true });
    };
    return (
        <div>
            <h1>장바구니</h1>

            {isLoading ? (
                'loading...'
            ) : (
                <ul style={{ textAlign: 'left' }}>
                    {cart.items.map((cartItem) => (
                        <li key={cartItem.id}>
                            <h5>{cartItem.product.name}</h5>
                            <span>[{cartItem.quantity} 개 ]</span>
                            <button
                                onClick={handleClickRemoveItemToCart(cartItem.product.id)}
                            >
                                장바구니에서 빼기
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;
