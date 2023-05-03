import { setupApp } from './config/app'

const app = setupApp()
const PORT = 3000
app.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`) })
