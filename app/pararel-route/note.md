pararel route: konvensi folder didefined dengan @folder, dan konvennsi folder ini tidak
efek terhadap url struktur

Slot itu di passed sebagai props pada shared parent layout. dan gaperlu import
tinggal panggil saja nama foldernya otomatis akan terpanggil di dalam layout.

benefitnya adalah dengan adanya pararel route page yg terisolasi dengan page lainnya, dan dimana slot tidak masuk kedalam url struktur

slot sperti component tapi bentuknya adalah pages

default.tsx berfungsi sebagai fallback content ketika slot itu tidak diisi oleh segment aktif di route saat ini.
