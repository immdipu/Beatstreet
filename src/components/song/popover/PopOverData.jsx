import React, { useCallback } from "react";
import ListButton from "./ListButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AlbumIcon from "@mui/icons-material/Album";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import { useMutation } from "@tanstack/react-query";
import userApis from "../../../Api/userApi";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const PopOverData = ({
  showPlaylist,
  setShowPlaylist,
  playlistId,
  songId,
  albumId,
  artist,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const RemoveSongFromPlaylist = useMutation({
    mutationFn: () =>
      userApis.RemovePlaylistSong({
        playlistId,
        songId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries("userSinglePlaylist");
    },
  });

  const HandleAddtoPlaylist = useCallback(() => {
    setShowPlaylist((prev) => !prev);
  }, []);

  const allArtist = new Set();
  let normalizedArtist = artist?.map((item) => {
    if (!allArtist.has(item.id)) {
      allArtist.add(item.id);
      return { id: item.id, name: item.name };
    } else {
      return null;
    }
  });

  normalizedArtist = normalizedArtist.filter((item) => item !== null);

  return (
    <div>
      {!playlistId && (
        <ListButton
          Icon={PlaylistAddIcon}
          title="Add to Playlist"
          onClick={HandleAddtoPlaylist}
        />
      )}
      {playlistId && (
        <ListButton
          Icon={DeleteIcon}
          title="Remove from playlist"
          onClick={() => {
            RemoveSongFromPlaylist.mutate(playlistId, songId);
          }}
        />
      )}
      {albumId && (
        <ListButton
          Icon={AlbumIcon}
          onClick={() => {
            navigate(`/album/${albumId}`, {
              state: { background: location },
            });
          }}
          title="View Album"
        />
      )}
      {normalizedArtist &&
        normalizedArtist.length > 0 &&
        normalizedArtist.map((item) => {
          return (
            <Link to={`/artist/${item?.id}`} key={item?.id}>
              {" "}
              <ListButton Icon={PersonIcon} title={item?.name} />
            </Link>
          );
        })}
    </div>
  );
};

export default PopOverData;
