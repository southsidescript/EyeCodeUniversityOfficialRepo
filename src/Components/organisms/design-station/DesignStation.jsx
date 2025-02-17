import style from "@/styles/global.module.scss";

const DesignStation = () => {

    const des = {
        width:250,
        height:250,
        animationDuration:12
    }
    const des2 = {
        width:150,
        height:150,
        animationDuration:12
    }
    const des3 = {
        width:350,
        height:350,
        animationDuration:12
    }

    return (
        <article>
            <div style={des} className={style.home_design}></div>
            <div style={des2} className={style.home_design}></div>
            <div style={des3} className={style.home_design}></div>

        </article>
    )
}

export default DesignStation;