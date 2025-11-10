cara mengurangi bundle javascript dengan spesifik menempatkan deklaratif "use client" pada component apabila memang itu
hanya untuk komponent

\*\*\* REAVALIDATETAG
revalidate tags ini adalah cache global - bisa di pake di banyak route

Dipakai ketika…
Ada banyak halaman/komponen yang menggunakan data yang sama.
Semua fetch yang diberi tag "exp" ingin dipaksa update.
Caching fetch bersifat global / shared.

Efeknya:
Targetnya bukan halaman, tapi fetch request yang punya tag.
Bisa memengaruhi banyak halaman sekaligus.
Tidak otomatis merender ulang halaman tertentu, tetapi
halaman yang membutuhkan fetch itu akan mengambil data baru.

\*\*\* ------------------

\*\*\* REVALIDATE PATH
Ini akan memaksa Next.js untuk membuang cache halaman (route), layout, atau komponen apa pun yang terkait dengan path tersebut.
ini cache yg hanya di spesific router aja

dipakai ketika…
Kamu ingin halaman tertentu di-refresh datanya setelah server action.
Halaman tersebut memakai fetch tanpa tags atau memakai SSR/Suspense.

Efeknya:
Targetnya spesifik: 1 halaman (atau layout) tertentu.
Tidak memengaruhi halaman lain.
Tidak memengaruhi fetch yang ditandai dengan tags.
