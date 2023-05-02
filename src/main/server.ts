import { setupApp } from './config/app'

const app = setupApp()
const PORT = 5050
app.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`) })
