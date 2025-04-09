<template>
    <div class="bookshelf">
        <h2>2025 Books I've Read</h2>

        <div v-for="rating in ratingOrder" :key="rating" class="book-group">
            <h3>{{ ratingEmojis[rating] }} {{ rating }}</h3>
            <ul>
                <li v-for="book in groupedBooks[rating]" :key="book.title">
                    <div class="book-title"><strong>{{ book.title }}</strong></div>
                    <div class="book-meta">
                        by {{ book.author }} • {{ book.format }} • {{ book.month }} • {{ book.status }}
                        <span v-if="book.narrator"> • 🎧 {{ book.narrator }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const books = ref([])
const groupedBooks = ref({})

const ratingOrder = [
    'Best',
    'Re-read & Recommend',
    'Recommend',
    'Good',
    'Meh',
    'Cringe'
]

const ratingEmojis = {
    'Best': '🌟',
    'Re-read & Recommend': '📚',
    'Recommend': '👍',
    'Good': '🙂',
    'Meh': '😐',
    'Cringe': '😬'
}

function groupAndSortBooks() {
    const groups = {}

    ratingOrder.forEach(r => (groups[r] = []))

    books.value.forEach(book => {
        if (groups[book.rating]) {
            groups[book.rating].push(book)
        } else {
            groups[book.rating] = [book]
        }
    })

    ratingOrder.forEach(r => {
        if (groups[r]) {
            // Use order of books as-is for now
            groupedBooks.value[r] = groups[r]
        }
    })
}

onMounted(async () => {
    const res = await fetch('/data/books.json')
    books.value = await res.json()
    groupAndSortBooks()
})
</script>

<style scoped>
.bookshelf {
    margin: 2rem 0;
}

.book-group {
    margin-bottom: 2rem;
}

.book-group h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--vp-c-brand);
}

ul {
    padding: 0;
    list-style: none;
}

li {
    margin: 0.75rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px dashed var(--vp-c-border);
}

.book-title {
    font-size: 1rem;
}

.book-meta {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
}
</style>
