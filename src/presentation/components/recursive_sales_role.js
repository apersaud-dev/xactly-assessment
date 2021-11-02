import { classNameModifiers } from '../utils/class_name_modifiers';

function RecursiveSalesRole({ data }) {
    let modifier = "";

    switch (data.status) {
        case classNameModifiers.NORMAL:
            modifier = "--normal";
            break;
        case classNameModifiers.WARNING:
            modifier = "--warning";
            break;
        case classNameModifiers.CRITICAL:
            modifier = "--critical";
            break;
        default:
            break;
    }

    if (!data.location) {
        return (
            <div className={`top-level`}>
                <div className={`top-level__header top-level__header${modifier}`}>
                    <p className="top-level__title">{data.title}</p>
                    <p className="top-level__status">{data.status}</p>
                </div>
                <ul className={`top-level__reports`}>
                    {data.directReports.map(report => {
                        return (
                            <RecursiveSalesRole
                                key={`${report.title}-${report.location}`}
                                data={report}
                            />

                        )
                    })}
                </ul>
            </div>
        )

    } else if (data.directReports.length === 0) {
        return (
            <li key={`${data.title}-${data.location}`} className={`bottom-level bottom-level${modifier}`}>
                <p className="bottom-level__title">{data.title}</p>
                <p className="bottom-level__location">{data.location}</p>
                <p className="bottom-level__status">{data.status}</p>
            </li>
        )
    }
    else {
        return (
            <li key={`${data.title}-${data.location}`} className={`middle-level`}>
                <div className={`middle-level__header middle-level__header${modifier}`}>
                    <p className="middle-level__title">{data.title}</p>
                    <p className="middle-level__location">{data.location}</p>
                    <p className="middle-level__status">{data.status}</p>
                </div>
                <ul className="middle-level__reports">
                    {data.directReports.map(item => {
                        return (
                            <RecursiveSalesRole
                                key={`${item.title}-${item.location}`}
                                data={item}
                            />
                        )
                    })}
                </ul>
            </li>
        )
    }
}

export default RecursiveSalesRole;