import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import api from "../../services";
import FormSchedule from "../../components/formSchedule";

const dates = Array.from(Array(21), (x, index) =>
  DateTime.local().plus({ days: index })
).filter((dateTime) => {
  return dateTime.weekday !== 6 && dateTime.weekday !== 7;
});
const times = Array.from(Array(9), (x, index) => index + 10 + "");

const AddSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    api.getAll().then((response) => {
      setSchedules(response.data);
    });
  }, []);

  useEffect(() => {
    if (!id) return;
    api
      .get(id)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveSchedule = async (e) => {
    e.preventDefault();

    const match = schedules.find((schedule) => {
      console.log(formData, schedule);
      return formData.date === schedule.date && formData.time === schedule.time;
    });

    if (!match) {
      const method = id ? "update" : "create";
      api[method](formData)
        .then((response) => {
          const scheduleIndex = schedules.findIndex((schedule) => {
            return schedule.id === response.data.id;
          });

          if (scheduleIndex >= 0) {
            schedules.splice(scheduleIndex, 1, response.data);
            setSchedules(schedules);
          } else {
            setSchedules([...schedules, response.data]);
          }

          setSubmitted(true);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const inactiveSchedule = (e) => {
    e.preventDefault();

    api.update(id, { ...formData, status: 0 });
    setFormData({ ...formData, status: 0 });
  };

  const activeSchedule = (e) => {
    e.preventDefault();

    api.update(id, { ...formData, status: 1 });
    setFormData({ ...formData, status: 1 });
  };

  return (
    <>
      {submitted && <h4>Agendamento salvo</h4>}
      <FormSchedule
        onSubmit={saveSchedule}
        onInputChange={handleInputChange}
        onInactive={id ? inactiveSchedule : undefined}
        onActive={id ? activeSchedule : undefined}
        values={formData}
        dates={dates}
        times={times.filter((time) => {
          return !schedules.find((schedule) => {
            return (
              schedule.time === time &&
              schedule.date === formData.date &&
              formData.time !== time
            );
          });
        })}
      />
    </>
  );
};

export default AddSchedule;
