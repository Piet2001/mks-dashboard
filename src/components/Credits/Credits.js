import React, { useState, useEffect } from 'react'
import axios from "axios"

function Credits() {

    const [VersionsList, setVersions] = useState([]);

    useEffect(() => {
        fetchVersions()

        async function fetchVersions() {
            const fetchVersions = async () => {
                const result = await axios("https://raw.githubusercontent.com/Piet2001/Teststuff/master/games.json");
                return result.data;
            };
            fetchVersions().then((r) => update(r));
        }

        async function update(versions) {
            console.log(versions)
            for (let i = 0; i < versions.length; i++) {
                versions[i].avg = await getavg(versions[i].code)
            }

            console.log(versions)
            setVersions(versions)
        }
    }, []);




    console.log(`length: ${VersionsList.length}`)
    return (
        <div>
            Op deze pagina vind je het gemiddelde aantal credits wat een melding in een versie opleverd.

            {(() => {
                VersionsList.sort((a, b) => (a.avg < b.avg) ? 1 : -1)
                var count = 0
                return (
                    VersionsList.map((version) => {
                        count++

                        return (<h4>#{count} - {version.code} - {version.avg}</h4>)
                    }

                    )
                )
            })()}
        </div>
    )
}

export default Credits

async function getavg(locale) {
    var data = await fetch(`https://raw.githubusercontent.com/Piet2001/Missionfiles-All-Versions/master/Missions/${locale}.json`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    data = data.filter(mission => mission.additional.only_alliance_mission !== true && mission.additional.guard_mission !== true)
    const avg = data.reduce((total, next) => total + next.average_credits, 0) / data.length;

    return `${avg.toFixed(2)} credits (${data.length} missions)`
}
