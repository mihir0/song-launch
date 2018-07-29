const express = ('express');
const path = ('path');
const app = express();

app.use(express.static('/dist/song-launch'));
app.get('/*', (req, res) => {
    res.sendFile(path.join('/dist/song-laungh/index.html'));
});
app.listen(process.env.PORT || 8080);
