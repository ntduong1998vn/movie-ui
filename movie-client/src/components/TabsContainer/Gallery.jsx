import React from "react";

function Gallery(photos) {
  return (
    <div className="gallery" itemscope>
      <div className="row">
        {/* <!-- gallery item --> */}
        <figure
          className="col-12 col-sm-6 col-xl-4"
          itemprop="associatedMedia"
          itemscope
        >
          <a
            href="src\assets\img\gallery\project-1.jpg"
            itemprop="contentUrl"
            data-size="1920x1280"
          >
            <img
              src="src\assets\img\gallery\project-1.jpg"
              itemprop="thumbnail"
              alt="Image description"
            />
          </a>
          <figcaption itemprop="caption description">
            Some image caption 1
          </figcaption>
        </figure>
        {/* <!-- end gallery item --> */}

        {/* <!-- gallery item --> */}
        <figure
          className="col-12 col-sm-6 col-xl-4"
          itemprop="associatedMedia"
          itemscope
        >
          <a
            href="src\assets\img\gallery\project-2.jpg"
            itemprop="contentUrl"
            data-size="1920x1280"
          >
            <img
              src="src\assets\img\gallery\project-2.jpg"
              itemprop="thumbnail"
              alt="Image description"
            />
          </a>
          <figcaption itemprop="caption description">
            Some image caption 2
          </figcaption>
        </figure>
        {/* <!-- end gallery item --> */}

        {/* <!-- gallery item --> */}
        <figure
          className="col-12 col-sm-6 col-xl-4"
          itemprop="associatedMedia"
          itemscope
        >
          <a
            href="src\assets\img\gallery\project-3.jpg"
            itemprop="contentUrl"
            data-size="1920x1280"
          >
            <img
              src="src\assets\img\gallery\project-3.jpg"
              itemprop="thumbnail"
              alt="Image description"
            />
          </a>
          <figcaption itemprop="caption description">
            Some image caption 3
          </figcaption>
        </figure>
        {/* <!-- end gallery item --> */}

        {/* <!-- gallery item --> */}
        <figure
          className="col-12 col-sm-6 col-xl-4"
          itemprop="associatedMedia"
          itemscope
        >
          <a
            href="src\assets\img\gallery\project-4.jpg"
            itemprop="contentUrl"
            data-size="1920x1280"
          >
            <img
              src="src\assets\img\gallery\project-4.jpg"
              itemprop="thumbnail"
              alt="Image description"
            />
          </a>
          <figcaption itemprop="caption description">
            Some image caption 4
          </figcaption>
        </figure>
        {/* <!-- end gallery item --> */}

        {/* <!-- gallery item --> */}
        <figure
          className="col-12 col-sm-6 col-xl-4"
          itemprop="associatedMedia"
          itemscope
        >
          <a
            href="src\assets\img\gallery\project-5.jpg"
            itemprop="contentUrl"
            data-size="1920x1280"
          >
            <img
              src="src\assets\img\gallery\project-5.jpg"
              itemprop="thumbnail"
              alt="Image description"
            />
          </a>
          <figcaption itemprop="caption description">
            Some image caption 5
          </figcaption>
        </figure>
        {/* <!-- end gallery item --> */}

        {/* <!-- gallery item --> */}
        <figure
          className="col-12 col-sm-6 col-xl-4"
          itemprop="associatedMedia"
          itemscope
        >
          <a
            href="src\assets\img\gallery\project-6.jpg"
            itemprop="contentUrl"
            data-size="1920x1280"
          >
            <img
              src="src\assets\img\gallery\project-6.jpg"
              itemprop="thumbnail"
              alt="Image description"
            />
          </a>
          <figcaption itemprop="caption description">
            Some image caption 6
          </figcaption>
        </figure>
        {/* <!-- end gallery item --> */}
      </div>
    </div>
  );
}

export default Gallery;
