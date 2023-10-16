import Modal from "@/components/modal";
import VideoPlayer from "@/components/video-player";
import { useMirrorWorld } from "@/hooks/use-mirrorworld";

const VideoModal = () => {
  const { videoModal, closeVideoModal } = useMirrorWorld();
  return (
    <Modal
      isOpen={videoModal?.open}
      title={"video player"}
      closeModal={closeVideoModal}
    >
      <VideoPlayer
        assetReference={
          videoModal?.assetRefernce ||
          "https://d1hus0nx0ytxoz.cloudfront.net/out/v1/de86ede6d44a426886276e502c10ad79/26fab79877664df5bc4cb946a3aeb817/5efb491ddaba42b186fc2ea1575f8020/index.m3u8"
        }
        assetPoster={
          videoModal?.assetPoster ||
          "https://d1hus0nx0ytxoz.cloudfront.net/44e81037-213e-4c18-9b04-520aa49b78c1/thumbnails/84d157cc-2cc9-4514-a46c-dc12466d140f_thumb.0000000.jpg"
        }
      />
    </Modal>
  );
};

export default VideoModal;
