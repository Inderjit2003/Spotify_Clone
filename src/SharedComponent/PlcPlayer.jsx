import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'react-h5-audio-player/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlcPlayer = ({ audioPath, onPlay }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            onPlay(audioPath);
        }
    };

    return (
        <Container className="text-center mt-4">
            <Row>
                <Col>
                    <Button variant="primary" onClick={handlePlayPause}>
                        {isPlaying ? (
                            <FontAwesomeIcon icon={faPause} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} />
                        )}
                    </Button>
                </Col>
                <Col>
                    <div className="audio-player">
                        <audio src={audioPath} controls />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlcPlayer;
