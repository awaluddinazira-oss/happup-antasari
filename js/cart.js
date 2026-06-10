// State Keranjang
let cart = [];
const waNumber = "6282148004822";

// Fungsi untuk format mata uang
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(number);
};

// Fungsi Render Keranjang
const renderCart = () => {
    const cartContainer = $('#cart-items-list');
    cartContainer.empty();
    
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartContainer.append('<li class="empty-cart-msg">Keranjang masih kosong</li>');
    } else {
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            totalItems += item.qty;

            cartContainer.append(`
                <li class="cart-item">
                    <div class="cart-item-details">
                        <span class="cart-item-name">${item.name}</span>
                        <div class="cart-qty-controls">
                            <button class="btn-qty btn-qty-minus" data-index="${index}">-</button>
                            <span class="cart-item-qty">${item.qty}</span>
                            <button class="btn-qty btn-qty-plus" data-index="${index}">+</button>
                            <span class="cart-item-price"> x ${formatRupiah(item.price)}</span>
                        </div>
                    </div>
                    <button class="btn-remove-item" data-index="${index}">&times;</button>
                </li>
            `);
        });
    }

    $('#cart-total-price').text(formatRupiah(total));
    $('#floating-cart-count').text(totalItems);

    // Sembunyikan atau tampilkan floating cart
    if (totalItems > 0) {
        $('#floating-cart').addClass('show');
    } else {
        $('#floating-cart').removeClass('show');
    }
};

$(document).ready(function() {
    // Inject HTML untuk Floating Cart dan Modal Keranjang
    $('body').append(`
        <!-- Floating Cart Button -->
        <div id="floating-cart" class="floating-cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span id="floating-cart-count" class="cart-count">0</span>
        </div>

        <!-- Cart Modal / Sidebar -->
        <div id="cart-modal" class="cart-modal">
            <div class="cart-header">
                <h3>Keranjang Pesanan</h3>
                <button id="close-cart">&times;</button>
            </div>
            <div class="cart-body">
                <p id="selected-room-display" class="room-display-text">Room belum dipilih</p>
                <ul id="cart-items-list" class="cart-items-list">
                    <!-- Items go here -->
                </ul>
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total:</span>
                    <span id="cart-total-price">Rp 0</span>
                </div>
                <button id="btn-checkout-wa" class="btn-checkout">Pesan Lewat WhatsApp</button>
            </div>
        </div>
        
        <!-- Cart Backdrop -->
        <div id="cart-backdrop" class="cart-backdrop"></div>
    `);

    // Event Add to Cart
    $(document).on('click', '.btn-add-cart', function(e) {
        e.preventDefault();
        
        const room = $('#pageRoomNumber').val();
        if (!room) {
            alert("Silakan pilih Nomor Room terlebih dahulu (Langkah 1) sebelum menambahkan menu!");
            // Scroll ke room picker
            $('html, body').animate({
                scrollTop: $(".room-picker-card").offset().top - 100
            }, 500);
            return;
        }

        const name = $(this).data('name');
        const price = parseInt($(this).data('price'));

        // Cek apakah item sudah ada di keranjang
        const existingItem = cart.find(i => i.name === name);
        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        renderCart();
        $('#selected-room-display').text(`Room: ${room}`);

        // Animasi tombol sebentar
        const btn = $(this);
        const originalText = btn.text();
        btn.text('Ditambahkan ✓').addClass('added');
        setTimeout(() => {
            btn.text(originalText).removeClass('added');
        }, 1000);
    });

    // Event Tambah/Kurang Qty
    $(document).on('click', '.btn-qty-plus', function() {
        const index = $(this).data('index');
        cart[index].qty++;
        renderCart();
    });

    $(document).on('click', '.btn-qty-minus', function() {
        const index = $(this).data('index');
        if (cart[index].qty > 1) {
            cart[index].qty--;
        } else {
            // Hapus jika qty jadi 0
            cart.splice(index, 1);
        }
        renderCart();
    });

    // Event Hapus Seluruh Item
    $(document).on('click', '.btn-remove-item', function() {
        const index = $(this).data('index');
        cart.splice(index, 1);
        renderCart();
    });

    // Event Buka Keranjang
    $(document).on('click', '#floating-cart', function() {
        const room = $('#pageRoomNumber').val();
        if (room) $('#selected-room-display').text(`Room: ${room}`);
        
        $('#cart-modal').addClass('open');
        $('#cart-backdrop').addClass('open');
    });

    // Event Tutup Keranjang
    $(document).on('click', '#close-cart, #cart-backdrop', function() {
        $('#cart-modal').removeClass('open');
        $('#cart-backdrop').removeClass('open');
    });

    // Update display room jika dropdown berubah setelah cart dibuka
    $('#pageRoomNumber').on('change', function() {
        const room = $(this).val();
        if (room) {
            $('#selected-room-display').text(`Room: ${room}`);
        } else {
            $('#selected-room-display').text('Room belum dipilih');
            // Jika tidak ada room yang dipilih, kosongkan keranjang
            cart = [];
            renderCart();
            // Tutup modal keranjang jika sedang terbuka
            $('#cart-modal').removeClass('open');
            $('#cart-backdrop').removeClass('open');
        }
    });

    // Event Checkout WhatsApp
    $('#btn-checkout-wa').on('click', function() {
        const room = $('#pageRoomNumber').val();
        if (!room) {
            alert("Silakan pilih Nomor Room terlebih dahulu!");
            $('#cart-modal').removeClass('open');
            $('#cart-backdrop').removeClass('open');
            return;
        }

        if (cart.length === 0) {
            alert("Keranjang masih kosong!");
            return;
        }

        let total = 0;
        let message = `Halo Happy Puppy, saya ingin memesan menu:%0A%0A`;
        message += `📍 *${room}*%0A%0A`;
        
        cart.forEach((item) => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            message += `- ${item.qty}x ${item.name} (${formatRupiah(itemTotal)})%0A`;
        });

        message += `%0A*Total: ${formatRupiah(total)}*%0A%0A`;
        message += `Terima kasih!`;

        const waUrl = `https://wa.me/${waNumber}?text=${message}`;
        window.open(waUrl, '_blank');
        
        // Optional: Kosongkan keranjang setelah pesan
        // cart = [];
        // renderCart();
        // $('#cart-modal').removeClass('open');
        // $('#cart-backdrop').removeClass('open');
    });
});
