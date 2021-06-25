export default function GifDisplay(props) {
    let gifElem = props.data.map((item) => {
        return (
            <div key = {item.id} onClick = {() => props.handleGifClick(item.images.fixed_height_downsampled.url)} className = "gifWidth">
                 <img src = {item.images.fixed_height_downsampled.url} />
            </div>
        )
    })
    return (
        <div className = 'gifGrid'>
            {gifElem}
        </div>
    )
}