const express = ('express');
const path = ('path');
const app = express();

app.use(express.static(__dirname + '/dist/song-launch'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});
